# frozen_string_literal: true

module Mutations
  class TestMutation < GraphQL::Schema::Mutation
    description 'An example of a test mutation'

    argument :numbers, InputTypes::TestInputType, required: true

    field :result, Types::TestType, null: true

    def resolve(**args)
      # raise GraphQL::ExecutionError, 'Not allowed' unless context[:current_user]

      return { result: { addition: args[:numbers][:first] + args[:numbers][:second] } }
    end
  end
end
