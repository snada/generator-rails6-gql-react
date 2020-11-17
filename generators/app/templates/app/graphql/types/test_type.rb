# frozen_string_literal: true

module Types
  class TestType < GraphQL::Schema::Object
    field :addition, Float, null: false
  end
end
