class CreateJackpots < ActiveRecord::Migration[5.1]
  def change
    create_table :jackpots do |t|
      t.string :winning_line
      t.integer :bet
      t.integer :winning_price

      t.timestamps
    end
  end
end
