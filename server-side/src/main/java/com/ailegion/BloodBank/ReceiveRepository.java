package com.ailegion.BloodBank;


import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReceiveRepository extends MongoRepository<Receive, ObjectId> {
    List<Receive> findByPin(String pin);
}
