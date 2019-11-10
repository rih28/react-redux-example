# React/Redux Exercise

You have been engaged by a 'top secret competitor' of MarktoMarket to create a prototype application. The client wants a prototype with the following requirements:-

  * The ability to list and browse all the transactions, customers refer to a transaction or deal - and normally refer to the target company. If time, a way to filter the deals by size or target would be great.
  * The ability to create a project, and a way to add and remove transactions/deals from a project.
  * The ability to view all the transactions/deals in a given project
  * The ability to view all projects


The prototype needs to be ready for their investment pitch in three hours time; the CEO has supplied some sample transaction data.

I took just a bit over 3 hours due to an assumption I will list later.

## To run this project:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Assumptions

1. I added in a user login thing. It was a waste of time but I wanted to keep track of new projects.
2. I decided to restructure the array of transaction objects using the target_id as a key. The reason being that I could easily convert this to an array of keys or values and use these on the fly (as I have implemented). Sadly, I wasted time after finally noticing that there would be two sets of duplicate keys. I then tried to cleverly construct an array of transaction objects as a value and the target_id as the key. However, I felt this would not make sense after seeing that often the target_name is not the same. So, I decided to simply leave them as objects and set an arbitrary unique key (in this case, integers). I am sorry for this, but I was running out of time after implementing everything on my first data reconfiguration decision.
2a. Argh, I had to set a mapping of my arbitrary transaction id's for filtering! Sorry.
3. I dont have validation of cross project transaction addition i.e. transaction 1 can be in project 1 and 2. I wasn't sure whether this would be the case. This may be obvious in reality, but I only really thought about it as an issue after filtering current existing transactions in a project from the add transaction screen.
4. I used bootstrap for speed! Not wise it seems
5. Filter is poor but works. I was running out of time! Also, noticed the unknown, my check was based on poor assumption that all values were stringified integers. However, I ran out of time and basically if you put in >100000000000 and add zeros it should start to filter both on the full transaction page and on the add transaction view.
6. There are some deprecated parts in here, sorry, was planning on fixing them but ran out of time.# react-redux-example
