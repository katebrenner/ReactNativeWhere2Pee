class CreateBathrooms < ActiveRecord::Migration[5.1]
  def change
    create_table :bathrooms do |t|
      t.float :latitude
      t.float :longitude
      t.decimal :latitudeDelta
      t.decimal :longitudeDelta
      t.string :address
      t.string :name
      t.string :hoursMon
      t.string :HoursTues
      t.string :hoursWed
      t.string :hoursThurs
      t.string :hoursFri
      t.string :hoursSat
      t.string :hoursSun



      t.timestamps
    end
  end
end
