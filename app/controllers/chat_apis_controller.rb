class ChatApisController < ApplicationController

  skip_before_action :verify_authenticity_token

  before_action :load_users, only: [:index]
  before_action :load_user, only: [:show, :new_message]


  def index
    render json: @users, each_serializer: ChatsSerializer, current_user: current_user
  end

  def show
    render json: @user, serializer: ChatSerializer, current_user: current_user
  end

  def update
  end

  def new_message
    Message.create(
      body: params[:body],
      sender: current_user,
      receiver: @user
    )
    render json: {}, status: 201
  end

  def user_info
    render json: current_user, serializer: UserInfoSerializer
  end

  private

  def load_users
    @users = User.where('id != ?', current_user.id)
  end

  def load_user
    @user = User.find(params[:id])
  end

end
