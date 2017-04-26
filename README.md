## Largest Subarray Sum


### Problem

Given an array of integers find a sequence with the largest sum. 

For example, take a look at an example below.

```javascript  

let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array){
 // code to write here
}

largestSubarraySum(array)
// 16
```

### Process

Mainly, this is your chance to shine.  This problem is hard, but one of the nice things about it is that it has many different solutions.  

Use it as a mechanism to focus on process, and work with a partner, if you can.  Think about this problem as a practice in breaking down problems, and knowing when to retreat from a potential solution.  Remember from the last lesson to try to derive what was good and what did not work in your previous attempt, before moving onto a new attempt.

A couple small hints to get started: where are some examples where the solution becomes obvious.  What can you learn from it.  Ok that's enough.  

Be self-aware about when your process.  When is your process good, and when it is less sucessful?  We are trying to be disciplined about developing good habits as much as anything else. 

### A couple more hints for those who have first struggled

If you have not yet worked on this problem yet, and by that we mean spending over an hour with it, then it's time to put away the readme and get to work.  

You can come back to this later, but we won't help too much.  Still you can find a main hint below.

The main hint is that this is a type of greedy algorithm.  It's a new type of algorithm that we did not get a chance to explore.  All a greedy algorithm means, is that even before processing all possible information, you can make begin to make decisions.  Your goal is to try not to regret making the decision at a later time.  

So, here a way to apply a greedy approach is to try to determine if a sequence is a potential maximum contiguous subarray even before reading through the entire array.  Another mechanism is to think about when one can immediately dispose of a sequence as being a potential sequence, even before reading through the entire array.

With that, get to work.


	
