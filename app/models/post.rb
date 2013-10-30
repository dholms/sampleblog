class Post < ActiveRecord::Base
  include ActiveModel::ForbiddenAttributesProtection
  validates :title, presence: true,
  					length: { minimum: 5 }
end
