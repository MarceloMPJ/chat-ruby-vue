class Message < ApplicationRecord

  belongs_to :sender, class_name: 'User'
  belongs_to :receiver, class_name: 'User'

  after_create_commit { UpdateChatJob.perform_later self }

  scope :between_users, ->(user_one, user_two) {
    where('(sender_id = ? AND receiver_id = ?) OR (receiver_id = ? AND sender_id = ?)', user_one.id, user_two.id, user_one.id, user_two.id).order('id ASC')
  }

end
