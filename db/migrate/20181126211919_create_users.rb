class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :user_name
      t.string  :image_url
      t.text   :token

      t.timestamps
    end
  end
end
