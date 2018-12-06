class ApplicationController < ActionController::Base

  before_action :authorize_user

  attr_reader :current_user

  def authorize_user
    @current_user = User.find(session[:current_user_id]) if session[:current_user_id]
  end

end
