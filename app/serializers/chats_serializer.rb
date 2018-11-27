class ChatsSerializer < ActiveModel::Serializer

  attributes :user_id,
             :active,
             :status_user,
             :img_url,
             :name,
             :preview,
             :send_by_user

  def user_id
    object.id
  end

  def active
    'active'
  end

  def status_user
    'online'
  end

  def img_url
    object.image_url
  end

  def preview
    last_message.body
  end

  def send_by_user
    last_message.sender_id != object.id
  end

  private

  def last_message
    return @message if @message
    @message = Message.between_users(object, current_user).first
  end

end
