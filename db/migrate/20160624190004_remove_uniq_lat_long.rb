class RemoveUniqLatLong < ActiveRecord::Migration
  def change
    remove_index(:benches, :name => "index_benches_on_lat_and_lng")
  end
end
