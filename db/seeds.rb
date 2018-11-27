def create_user(name, user_name, image_url, token)
  User.create!(
    name: name,
    user_name: user_name,
    image_url: image_url,
    token: token
  )
end

def create_message(sender, receiver, body)
  Message.create!(
    sender: sender,
    receiver: receiver,
    body: body
  )
end

ActiveRecord::Base.transaction do

  user_one = create_user(
    "Usuário Um",
    :user_one,
    "http://ih0.redbubble.net/avatar.736745.100x100.jpg",
    "tokendoidao1"
  )

  user_two = create_user(
    "Usuário Dois",
    :user_two,
    "https://gamersboard.com.br/uploads/profile/photo-thumb-22958.png",
    "tokendoidao2"
  )

  create_message(user_one, user_two, 'Iae')
  create_message(user_two, user_one, 'Iae bro, suave?')
  create_message(user_one, user_two, 'Tranquilo... e tu?')

end
