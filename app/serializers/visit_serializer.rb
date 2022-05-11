class VisitSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :user_id, :provider_id, :purpose
  belongs_to :provider
  belongs_to :user
end
