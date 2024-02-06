package com.ai_legion.LifeLine;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.geo.GeoJson;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;
@Document(collection="recipients")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Update {
    @Id
    private ObjectId _id;
    private String name;
    private String address;
    private String phone;
    private String email;
}
