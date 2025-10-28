        document.addEventListener('DOMContentLoaded', function() {
            const rideOptions = document.querySelectorAll('.ride-option');
            const bookBtn = document.getElementById('bookBtn');
            const driverInfo = document.getElementById('driverInfo');
            const rideProgress = document.getElementById('rideProgress');
            
            // Select ride option
            rideOptions.forEach(option => {
                option.addEventListener('click', function() {
                    // Remove selected class from all options
                    rideOptions.forEach(opt => opt.classList.remove('selected'));
                    
                    // Add selected class to clicked option
                    this.classList.add('selected');
                    
                    // Update button text
                    const rideType = this.querySelector('.ride-name').textContent;
                    bookBtn.textContent = `Confirm ${rideType}`;
                });
            });
            
            // Book ride
            bookBtn.addEventListener('click', function() {
                // Show driver info
                driverInfo.classList.add('active');
                
                // Change button text
                this.textContent = 'Cancel Ride';
                
                // After 2 seconds, show ride in progress
                setTimeout(() => {
                    rideProgress.classList.add('active');
                    driverInfo.classList.remove('active');
                    this.style.display = 'none';
                }, 2000);
            });
        });