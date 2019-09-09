import graphene
from graphene.relay import Node
from graphene_mongo import MongoengineConnectionField, MongoengineObjectType
from models import Vehicle as VehicleModel
from models import Person as PersonModel
from models import Rental as RentalModel

class Vehicle(MongoengineObjectType):

    class Meta:
        model = VehicleModel
        interfaces = (Node,)

class Person(MongoengineObjectType):

    class Meta:
        model = PersonModel
        interfaces = (Node,)

class Rental(MongoengineObjectType):

    class Meta:
        model = RentalModel
        interfaces = (Node,)

class Query(graphene.ObjectType):
    node = Node.Field()
    all_customers = MongoengineConnectionField(Person)
    all_rentals = MongoengineConnectionField(Rental)
    all_vehicles = MongoengineConnectionField(Vehicle)
    Vehicles = graphene.Field(Vehicle)

schema = graphene.Schema(query=Query, types=[Vehicle, Person, Rental])