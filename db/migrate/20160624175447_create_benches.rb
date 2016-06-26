class CreateBenches < ActiveRecord::Migration
  def change
    create_table :benches do |t|
      t.text :description
      t.float :lat, null: false
      t.float :lng, null: false
    end

    add_index :benches, [:lat, :lng], unique: true
  end
end
