import { default as UserProfile } from '@/components/UserProfile';
import { render, screen } from '@testing-library/react';

describe('User Profile - Rendering', () => {
  it('should have text Email Verified whte isEmailVerified is true', () => {
    render(
      <UserProfile
        isEmailVerified={true}
        displayName="John"
        emailAddress="john@gmail.com"
        username="john98"
      />
    );
    expect(screen.getByText(/Email Verified/)).toBeInTheDocument();
  });

  it('should have text Email Not Verified whte isEmailVerified is false', () => {
    render(
      <UserProfile
        isEmailVerified={false}
        displayName="John"
        emailAddress="john@gmail.com"
        username="john98"
      />
    );
    expect(screen.queryByText(/Email Verified/)).not.toBeInTheDocument();
    expect(screen.getByText(/Email Not Verified/)).toBeInTheDocument();
  });

  it('should end with three dots if the length is greater than 6', () => {
    render(
      <UserProfile
        isEmailVerified={false}
        displayName="John Doe"
        emailAddress="john@gmail.com"
        username="john98"
      />
    );

    const displayNameElement = screen.getByText(/Display Name:/);
    expect(displayNameElement).toHaveTextContent(/.*\.\.\./);
  });

  it('should not hav three dots at the end of display name if the length is less than 6', () => {
    render(
      <UserProfile
        isEmailVerified={false}
        displayName="John"
        emailAddress="john@gmail.com"
        username="john98"
      />
    );

    const displayNameElement = screen.getByText(/Display Name:/);
    expect(displayNameElement).not.toHaveTextContent(/.*\.\.\./);
  });
});
