"""Populating the database with dummy data to start working with.
 We can probably extend it's use to something else though"""

import os

from mongoengine import connect

from models import Vehicle, Person


connect(os.getenv("MONGODB_DATABASE"), host=os.getenv("MONGODB_CONNECTION_STRING"), alias='default')

def init_db():
    # Create the fixtures
    customer_image = open('/test-images/man.png','rb')
    me = Person(name='Jermaine Jackson',photo_id=Person.photo_id.replace(customer_image, filename="man-img.png"),age=20,dob='10/10/1999',Description="A lover of all things cars and bikes",
    email_address=["jjjjjjjackson@gmail.com"],Language=["English"], lot_num=12,Street_name="Brooklyn Ave",
    City="Spanish Town",Parish="St. Catherine")
    me.save()


    vehicle_image = open('/test-images/mazada-1.jpg','rb') 
    mazda = Vehicle(model="RX7",owner_id=me.pid, make="Mazda",year="01/01/1994",
     transmission_type="Manual", Description="Intial-D anyone?",Price=1000.98, photos=[Vehicle.photos.replace(vehicle_image, filename="mazada.jpg")])
    mazda.save()
    
#     first_rental = Rental(rental_id="1",start_date ="",
#     end_date = "",
#     owner_id = "",
#     renter_id = "",
#     vehicle_id = "",
#     pickup_location = "",
#     dropoff_location = "",
#     pickup_time = "",
#     dropoff_time = "",
# )
    # peter = Employee(name='Peter', department=engineering, role=engineer)
    # peter.save()

    # roy = Employee(name='Roy', department=engineering, role=engineer)
    # roy.save()

    # tracy = Employee(name='Tracy', department=hr, role=manager)
    # tracy.save()
