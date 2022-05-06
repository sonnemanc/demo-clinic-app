class AddPurposeToVisit < ActiveRecord::Migration[7.0]
  def change
    add_column :visits, :purpose, :string
  end
end
