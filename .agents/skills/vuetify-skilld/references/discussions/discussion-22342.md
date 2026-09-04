---
number: 22342
title: Change start hour for day in VCalendar
category: Q&A
created: 2025-11-18
url: "https://github.com/vuetifyjs/vuetify/discussions/22342"
upvotes: 1
comments: 2
answered: false
---

# Change start hour for day in VCalendar

I'm wondering if it's possible to change the hours of this day view. I would like it to start at a specified hour (say 4am, and go till 3:59am the next day). 

My calendar has a lot of events that go past midnight and I'm trying to see those items but in a day view. 

<img width="843" height="459" alt="Screenshot 2025-11-17 at 4 34 12 PM" src="https://github.com/user-attachments/assets/8fc1f72e-69f7-4902-818e-f3827874f41a" />


---

## Top Comments

**@KaelWD** [maintainer]:

#12563

**@Joebayld**:

I managed to change the start with `:firstInterval=4`. However, it doesn't continue the events to the next day when I go past midnight. Is there a way to customize the event's it pulls for a day? That way I can code it to pull the next days events up until 4am. 

<img width="607" height="508" alt="Screenshot 2025-11-17 at 5 49 55 PM" src="https://github.com/user-attachments/assets/56d9f6ab-fb0e-4c2e-bd62-881a98cbb4ce" />
