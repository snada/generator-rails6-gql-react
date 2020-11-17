# frozen_string_literal: true

module Types
  class MutationType < GraphQL::Schema::Object
    field :test_mutation, mutation: Mutations::TestMutation
  end
end
