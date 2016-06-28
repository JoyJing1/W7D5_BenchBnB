class AddSeating < ActiveRecord::Migration
  def change
    add_column :benches, :seats, :integer, default: 1
  end
end
