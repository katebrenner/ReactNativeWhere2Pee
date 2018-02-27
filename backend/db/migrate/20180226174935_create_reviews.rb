class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.text :reviews
      t.integer :rating
      t.integer :location_id, index: true

      t.timestamps
    end
  end
end
