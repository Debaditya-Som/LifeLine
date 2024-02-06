package com.ai_legion.LifeLine;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/donate")
public class DonateController {

    @Autowired
    private DonateService donateService;
    @GetMapping
    public ResponseEntity<List<Donate>> getDonors() {
        return new ResponseEntity<List<Donate>>(donateService.allDonors(), HttpStatus.OK);
    }

    @GetMapping("/{pin}")
    public ResponseEntity<List<Donate>> getSingleDonors(@PathVariable String pin)
    {
        return new ResponseEntity<List<Donate>>(donateService.findByPin(pin), HttpStatus.OK);
    }
}

