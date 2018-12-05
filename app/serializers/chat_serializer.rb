class ChatSerializer < ActiveModel::Serializer

  attributes :id,
             :active,
             :img_url,
             :name,
             :messages

  def img_url
    object.image_url
  end

  def active
    nil
  end

  def messages
    messages = Message.between_users(object, current_user)
    messages.collect do |message|
      if message.sender == current_user
        {
          type: 'sent',
          contact_img: current_user.image_url,
          body: message.body
        }
      else
        {
          type: 'replies',
          contact_img: object.image_url,
          body: message.body
        }
      end
    end
  end

end
