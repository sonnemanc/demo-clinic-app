class VisitSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :provider_id
  belongs_to :author
  belongs_to :user
end
