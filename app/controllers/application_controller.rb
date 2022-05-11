class ApplicationController < ActionController::API

    include ActionController::Cookies
    before_action :authorized_user
  
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
  
    private
  
    def unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end 
    
    def authorized_user
     
      render json: {errors: ["Not authorized"]},status: :unauthorized unless session.include? :user_id
    end
  end
end
