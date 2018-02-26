class RenameReviewsColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :reviews, :location_id, :bathroom_id
  end
end
