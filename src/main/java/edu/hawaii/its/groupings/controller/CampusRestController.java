package edu.hawaii.its.groupings.controller;

import java.security.Principal;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.hawaii.its.api.type.Campus;
import edu.hawaii.its.groupings.service.CampusService;

@RestController
public class CampusRestController {

    private static final Log logger = LogFactory.getLog(CampusRestController.class);

    @Autowired
    private CampusService campusService;

    @GetMapping(value = "/api/campuses",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Campus>> campuses() {
        logger.info("Entered REST campuses...");
        List<Campus> data = campusService.findActualAll();
        return ResponseEntity
                .ok()
                .body(data);
    }

    @PreAuthorize("isAuthenticated()")
    @RequestMapping(value = "/user/me", method = RequestMethod.GET)
    public Principal user(Principal principal) {
        return principal;
    }
}
