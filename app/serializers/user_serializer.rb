class UserSerializer < ActiveModel::Serializer
  #include FastJsonapi::ObjectSerializer
  attributes :id, :first_name, :last_name, :username, :password
  has_many :visits
end
