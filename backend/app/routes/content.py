from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.utils.content_gen import ContentGenerator

content_bp = Blueprint('content', __name__)
content_generator = ContentGenerator()

@content_bp.route('/generate', methods=['POST'])
@jwt_required()
def generate_content():
    data = request.get_json()
    user_id = get_jwt_identity()
    
    required_fields = ['prompt', 'style', 'tone']
    if not all(field in data for field in required_fields):
        return jsonify({'error': 'Missing required fields'}), 400
        
    result = content_generator.generate_content(
        prompt=data['prompt'],
        style=data['style'],
        tone=data['tone']
    )
    
    if result['success']:
        return jsonify({
            'content': result['content'],
            'user_id': user_id
        }), 200
    else:
        return jsonify({'error': result['error']}), 500

@content_bp.route('/optimize', methods=['POST'])
@jwt_required()
def optimize_content():
    # TODO: Implement content optimization
    return jsonify({'message': 'Content optimization endpoint'}), 200

@content_bp.route('/tone-adjust', methods=['POST'])
@jwt_required()
def adjust_tone():
    # TODO: Implement tone adjustment
    return jsonify({'message': 'Tone adjustment endpoint'}), 200 