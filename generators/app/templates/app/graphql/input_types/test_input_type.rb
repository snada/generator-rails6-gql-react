# frozen_string_literal: true

module InputTypes
  class TestInputType < GraphQL::Schema::InputObject
    description 'Attributes used to describe a point as input'

    argument :first, Float, 'First number to be added', required: true
    argument :second, Float, 'Second number to be added', required: true
  end
end
