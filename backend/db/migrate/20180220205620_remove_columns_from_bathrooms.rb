class RemoveColumnsFromBathrooms < ActiveRecord::Migration[5.1]
  def change
    remove_column :bathrooms, :latitudeDelta
    remove_column :bathrooms, :longitudeDelta
  end
end
