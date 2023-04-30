CREATE TABLE USERS(
	USER_ID SMALLINT NOT NULL DEFAULT 1	,
	USER_NAME VARCHAR(10),
    USER_DESCRIPTION VARCHAR(200),
    USER_AGE TINYINT,
    USER_LOOKINGFOR VARCHAR(20),
    PRIMARY KEY (USER_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO USERS (USER_NAME, USER_DESCRIPTION, USER_AGE, USER_LOOKINGFOR) 
VALUES ("Bowser", "Peach, you're so cool And with my star, we're gonna rule Peach, understand I'm gonna love you 'til the very end",
30, "Peach");
