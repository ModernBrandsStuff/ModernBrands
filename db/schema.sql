-- Create allowed_domains table
CREATE TABLE IF NOT EXISTS allowed_domains (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  domain VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create allowed_emails table for specific email addresses
CREATE TABLE IF NOT EXISTS allowed_emails (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create function to check if an email is allowed
CREATE OR REPLACE FUNCTION is_email_allowed(email_to_check VARCHAR) 
RETURNS BOOLEAN AS $$
DECLARE
  domain VARCHAR;
  is_allowed BOOLEAN;
BEGIN
  -- Extract domain from email
  domain := split_part(email_to_check, '@', 2);
  
  -- Check if the specific email is allowed
  SELECT EXISTS(SELECT 1 FROM allowed_emails WHERE email = email_to_check) INTO is_allowed;
  
  -- If specific email is allowed, return true
  IF is_allowed THEN
    RETURN TRUE;
  END IF;
  
  -- Check if the domain is allowed
  SELECT EXISTS(SELECT 1 FROM allowed_domains WHERE domain = domain) INTO is_allowed;
  
  RETURN is_allowed;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update updated_at
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_allowed_domains_timestamp
BEFORE UPDATE ON allowed_domains
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_allowed_emails_timestamp
BEFORE UPDATE ON allowed_emails
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
