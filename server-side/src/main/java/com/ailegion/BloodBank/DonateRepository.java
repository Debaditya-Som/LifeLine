package com.ailegion.BloodBank;


import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DonateRepository extends MongoRepository<Donate, ObjectId> {


    List<Donate> findByPin(String pin);
}

//this is the data access layer
