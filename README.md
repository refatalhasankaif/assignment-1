## টাইপস্ক্রিপ্টে ইন্টারফেস এবং টাইপের মধ্যে পার্থক্যঃ

Interfaces বেশিরভাগ সময় Object এর গঠন কেমন হবে তা বর্ণনা করতে ব্যবহার করা হয়। Type ব্যবহার করা হয় Object এবং অন্যান্য জিনিস যেমন Unions, intersections ইত্যাদি এর গঠন কেমন হবে তা বর্ণনা করতে। Interfaces কে একই নামে আবার লিখে প্রসারিত করা যাই কিন্তু Type কে প্রসারিত করতে গেলে তা Error দেখাই। Type সাধারণত ব্যবহার করা হয় এবং Interfaces Object এর ক্ষেত্রে ব্যবহার করা সহজ।

## টাইপস্ক্রিপ্টে keyof কীওয়ার্ডের এর ব্যবহারঃ

টাইপস্ক্রিপ্টে keyof কীওয়ার্ডটি এমন একটি টাইপ তৈরি করতে ব্যবহৃত হয় যা অন্য Type এ থাকা সমস্ত property এর নাম উপস্থাপন করে। কীগুলি ম্যানুয়ালি লেখার পরিবর্তে, keyof automatically সেগুলি বের করে নেয়। তাছাড়া keyof কীওয়ার্ডটি ব্যবহার করে একটি Type এ থাকা Key প্রিন্ট করা যাই এবং এই Key আছে কিনা তা যাচাই করে নেয়া যায়। যা আমাদেরকে নিরাপদ এবং আরও নমনীয় কোড লিখতে সাহায্য করে।  Example: 

```
type Person = {
    id: number;
    name: string;
    age: number;
};

const personDetails = (obj: Person, key: keyof Person) => {
    console.log(obj[key]);
};

const person1 = {
    id: 1,
    name: "Hasib",
    age: 19
};

personDetails(person1, "name"); //✅ Hasib
personDetails(person1, "email"); //❌ এইখানে Error দেখানোর কারণ email নামের কোনো কী Person অবজেক্টের ভেতরে নেই ।

```