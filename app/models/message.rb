class Message < ApplicationRecord

  belongs_to :sender, class_name: 'User'
  belongs_to :receiver, class_name: 'User'

  scope :between_users, ->(user_one, user_two) {
    where('(sender_id = ? OR receiver_id = ?) OR (sender_id = ? OR receiver_id = ?)', user_one.id, user_two.id, user_one.id, user_two.id).order('id DESC')
  }

end
