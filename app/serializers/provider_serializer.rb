class ProviderSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :first_name, :last_name, :title
end
