class ChatsController < ApplicationController

  before_action :set_user_into_session

  def index
  end

  private

  def set_user_into_session
    session[:current_user_id] = params[:id]
    authorize_user
  end

end
