class UpdateChatJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast 'chat_channel', message: render_message(message)
  end

  private

  def render_message(message)
    {
      send_id: message.sender_id,
      type: 'replies',
      contact_img: message.sender.image_url,
      body: message.body
    }
  end

end
