class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :user_name
      t.text :token

      t.timestamp
    end
  end
end
