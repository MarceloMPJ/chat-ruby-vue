class MessageSerializer < ActiveModel::Serializer

  attributes :id,
             :body,
             :sender,
             :receiver

  def sender
    {
      id: object.sender.id,
      name: object.sender.name,
      image_url: object.sender.image_url,
    }
  end

  def receiver
    {
      id: object.receiver.id,
      name: object.receiver.name,
      image_url: object.receiver.image_url,
    }
  end

end
