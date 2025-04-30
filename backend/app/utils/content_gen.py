import os
import requests
from typing import Dict, Any
from dotenv import load_dotenv

class ContentGenerator:
    def __init__(self):
        load_dotenv()
        self.api_token = os.getenv('HUGGINGFACE_API_TOKEN')
        if not self.api_token:
            raise ValueError("HUGGINGFACE_API_TOKEN not found in environment variables")
            
        # Using basic Lamini model with a different API endpoint format
        self.api_url = "https://api-inference.huggingface.co/models/MBZUAI/LaMini-T5-738M"
        
        # Debug information
        print("\n=== Debug Information ===")
        print(f"Token being used: {self.api_token}")
        print(f"Token length: {len(self.api_token)}")
        print(f"Token format: {'Valid' if self.api_token.startswith('hf_') else 'Invalid'}")
        print(f"Full Authorization header: Bearer {self.api_token}")
        print("========================\n")
        
    def generate_content(self, prompt: str, style: str, tone: str) -> Dict[str, Any]:
        if not self.api_token:
            return {
                "success": False,
                "error": "HuggingFace API token not found"
            }
            
        headers = {
            "Authorization": f"Bearer {self.api_token}",
            "Content-Type": "application/json"
        }
        
        # Simple prompt construction
        full_prompt = f"Write a {style} about {prompt} with a {tone} tone:"
        
        # Try a different payload format
        payload = {
            "inputs": full_prompt
        }
        
        try:
            print("\n=== Making API Request ===")
            print(f"URL: {self.api_url}")
            print(f"Headers: {headers}")
            print(f"Payload: {payload}")
            
            # Try a different approach - use the model ID directly
            model_id = "MBZUAI/LaMini-T5-738M"
            api_url = f"https://api-inference.huggingface.co/pipeline/text-generation/{model_id}"
            
            response = requests.post(api_url, headers=headers, json=payload)
            
            print("\n=== API Response ===")
            print(f"Status Code: {response.status_code}")
            print(f"Response Headers: {response.headers}")
            print(f"Response Text: {response.text}")
            print("=====================\n")
            
            if response.status_code == 401:
                return {
                    "success": False,
                    "error": f"Invalid or expired HuggingFace API token. Status: {response.status_code}, Response: {response.text}"
                }
            elif response.status_code == 403:
                return {
                    "success": False,
                    "error": f"Access forbidden. Make sure your token has the correct permissions. Status: {response.status_code}, Response: {response.text}"
                }
            elif response.status_code == 404:
                return {
                    "success": False,
                    "error": f"Model not found. Status: {response.status_code}, Response: {response.text}"
                }
                
            response.raise_for_status()
            generated_text = response.json()[0]['generated_text']
            
            return {
                "success": True,
                "content": generated_text.strip()
            }
        except Exception as e:
            return {
                "success": False,
                "error": f"Error: {str(e)}"
            } 