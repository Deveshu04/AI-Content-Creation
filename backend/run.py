import os
from dotenv import load_dotenv
from app import create_app, db

# Load environment variables
load_dotenv()

# Debug environment variables
print("=== Environment Variables ===")
print(f"HUGGINGFACE_API_TOKEN present: {'Yes' if 'HUGGINGFACE_API_TOKEN' in os.environ else 'No'}")
if 'HUGGINGFACE_API_TOKEN' in os.environ:
    print(f"HUGGINGFACE_API_TOKEN value: '{os.environ['HUGGINGFACE_API_TOKEN']}'")
    print(f"HUGGINGFACE_API_TOKEN length: {len(os.environ['HUGGINGFACE_API_TOKEN'])}")
    print(f"HUGGINGFACE_API_TOKEN starts with: {os.environ['HUGGINGFACE_API_TOKEN'][:4]}")
print("===========================")

app = create_app()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True) 