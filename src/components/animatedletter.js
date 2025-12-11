useEffect(() => {
    // Select all animated letters after component mounts
    const letters = document.querySelectorAll('.animated-letter');
    
    // Add event listeners to each letter
    letters.forEach(letter => {
      letter.addEventListener('mouseenter', () => {
        letter.style.transform = 'translateY(-10px)';
        letter.style.color = '#a855f7';
      });
      
      letter.addEventListener('mouseleave', () => {
        letter.style.transform = 'translateY(0)';
        letter.style.color = '';
      });
    });
    
    // Clean up event listeners on component unmount
    return () => {
      letters.forEach(letter => {
        letter.removeEventListener('mouseenter', () => {});
        letter.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);