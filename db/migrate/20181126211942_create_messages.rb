class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text      :body
      t.reference :sender,   foreign_key: { to_table: :users }
      t.reference :receiver, foreign_key: { to_table: :users }

      t.timestamp
    end
  end
end
