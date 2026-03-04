import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const professionalSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  whatsapp: z.string().min(1, 'WhatsApp number is required'),
  excelMastery: z.number().min(1).max(10),
  toolExposure: z.array(z.string()),
  primaryGoal: z.string().min(1, 'Primary program goal is required'),
  computerSpecs: z.string().optional(),
  disclaimer: z.boolean().refine((val) => val === true, 'You must accept the disclaimer'),
  availability: z.object({
    days: z.array(z.string()).min(1, 'Select at least one day'),
    hours: z.string().min(1, 'Specify your available hours'),
  }),
  commitment: z.string().min(1, 'Commitment level is required'),
  bigVision: z.string().min(1, 'This field is required'),
  manualTasks: z.string().min(1, 'This field is required'),
  experience: z.string().min(1, 'Years of experience is required'),
});

const graduateSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  whatsapp: z.string().min(1, 'WhatsApp number is required'),
  excelMastery: z.number().min(1).max(10),
  toolExposure: z.array(z.string()),
  primaryGoal: z.string().min(1, 'Primary program goal is required'),
  computerSpecs: z.string().optional(),
  disclaimer: z.boolean().refine((val) => val === true, 'You must accept the disclaimer'),
  availability: z.object({
    days: z.array(z.string()).min(1, 'Select at least one day'),
    hours: z.string().min(1, 'Specify your available hours'),
  }),
  commitment: z.string().min(1, 'Commitment level is required'),
  bigVision: z.string().min(1, 'This field is required'),
  areaOfInterest: z.string().min(1, 'Area of interest is required'),
  academicBackground: z.string().min(1, 'Academic background is required'),
});

const OnboardingPage = () => {
  const [persona, setPersona] = useState('professional');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(persona === 'professional' ? professionalSchema : graduateSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setIsSuccess(false);
    try {
      const docRef = await addDoc(collection(db, 'academy_submissions'), { ...data, persona });
      console.log('Document written with ID: ', docRef.id);
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Failed to submit the form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Industrial Transformation</h2>
          <p className="mt-4 text-lg text-gray-300">
            Welcome to the JJL Data Academy. 
            This is not a basic Excel class; it is an industrial 
            transformation. We focus on moving you from information to interpretation. Please be precise in your responses. Your answers will form the foundation of your 'Professional Brain' project—the automated tool you will build during this program to dominate your industry.</p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl">
        <div className="bg-gray-800 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <div className="mb-6">
            <label htmlFor="persona" className="block text-sm font-medium text-gray-300">
              I am a...
            </label>
            <select
              id="persona"
              value={persona}
              onChange={(e) => setPersona(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="professional">Professional pivoting careers</option>
              <option value="graduate">Graduate/Specialist</option>
            </select>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  {...register('fullName')}
                  className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>}
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300">
                  WhatsApp Number
                </label>
                <input
                  type="text"
                  id="whatsapp"
                  {...register('whatsapp')}
                  className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.whatsapp && <p className="mt-1 text-sm text-red-500">{errors.whatsapp.message}</p>}
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="excelMastery" className="block text-sm font-medium text-gray-300">
                  Excel & Logic Mastery (1-10)
                </label>
                <input
                  type="number"
                  id="excelMastery"
                  {...register('excelMastery', { valueAsNumber: true })}
                  className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.excelMastery && <p className="mt-1 text-sm text-red-500">{errors.excelMastery.message}</p>}
              </div>

              <div className="sm:col-span-6">
                <label className="block text-sm font-medium text-gray-300">Tool Exposure</label>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  {[ 'SQL', 'Python', 'VBA', 'Power BI'].map((tool) => (
                    <div key={tool} className="flex items-center">
                      <input
                        type="checkbox"
                        id={tool}
                        value={tool}
                        {...register('toolExposure')}
                        className="h-4 w-4 text-indigo-500 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500"
                      />
                      <label htmlFor={tool} className="ml-3 block text-sm font-medium text-gray-300">
                        {tool}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="primaryGoal" className="block text-sm font-medium text-gray-300">
                  Primary Program Goal
                </label>
                <select
                  id="primaryGoal"
                  {...register('primaryGoal')}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="">Select a goal</option>
                  <option value="remote-job">Remote Job</option>
                  <option value="consulting">Consulting</option>
                  <option value="promotion">Promotion</option>
                </select>
                {errors.primaryGoal && <p className="mt-1 text-sm text-red-500">{errors.primaryGoal.message}</p>}
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="computerSpecs" className="block text-sm font-medium text-gray-300">
                  Computer System Specs (Optional)
                </label>
                <textarea
                  id="computerSpecs"
                  rows="3"
                  {...register('computerSpecs')}
                  className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>

              <div className="sm:col-span-6">
                <label className="block text-sm font-medium text-gray-300">Availability</label>
                <div className="mt-2 space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    {[ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                      <div key={day} className="flex items-center">
                        <input
                          type="checkbox"
                          id={day}
                          value={day}
                          {...register('availability.days')}
                          className="h-4 w-4 text-indigo-500 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor={day} className="ml-3 block text-sm font-medium text-gray-300">
                          {day}
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.availability?.days && (
                    <p className="mt-1 text-sm text-red-500">{errors.availability.days.message}</p>
                  )}

                  <input
                    type="text"
                    placeholder="e.g., 9am - 1pm, 5pm - 8pm"
                    {...register('availability.hours')}
                    className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {errors.availability?.hours && (
                    <p className="mt-1 text-sm text-red-500">{errors.availability.hours.message}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="commitment" className="block text-sm font-medium text-gray-300">
                  How many hours per week will you dedicate?
                </label>
                <input
                  type="text"
                  id="commitment"
                  {...register('commitment')}
                  className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.commitment && <p className="mt-1 text-sm text-red-500">{errors.commitment.message}</p>}
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="bigVision" className="block text-sm font-medium text-gray-300">
                  If you could automate your hardest work task using AI, what would it do?
                </label>
                <textarea
                  id="bigVision"
                  rows="4"
                  {...register('bigVision')}
                  className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
                {errors.bigVision && <p className="mt-1 text-sm text-red-500">{errors.bigVision.message}</p>}
              </div>

              {persona === 'professional' ? (
                <>
                  <div className="sm:col-span-3">
                    <label htmlFor="manualTasks" className="block text-sm font-medium text-gray-300">
                      Manual Tasks in Current Role
                    </label>
                    <input
                      type="text"
                      id="manualTasks"
                      {...register('manualTasks')}
                      className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    {errors.manualTasks && <p className="mt-1 text-sm text-red-500">{errors.manualTasks.message}</p>}
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-300">
                      Years of Experience
                    </label>
                    <input
                      type="text"
                      id="experience"
                      {...register('experience')}
                      className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    {errors.experience && <p className="mt-1 text-sm text-red-500">{errors.experience.message}</p>}
                  </div>
                </>
              ) : (
                <>
                  <div className="sm:col-span-3">
                    <label htmlFor="areaOfInterest" className="block text-sm font-medium text-gray-300">
                      Specific Area of Interest (Finance/Economics)
                    </label>
                    <input
                      type="text"
                      id="areaOfInterest"
                      {...register('areaOfInterest')}
                      className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    {errors.areaOfInterest && (
                      <p className="mt-1 text-sm text-red-500">{errors.areaOfInterest.message}</p>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="academicBackground" className="block text-sm font-medium text-gray-300">
                      Academic Background
                    </label>
                    <input
                      type="text"
                      id="academicBackground"
                      {...register('academicBackground')}
                      className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    {errors.academicBackground && (
                      <p className="mt-1 text-sm text-red-500">{errors.academicBackground.message}</p>
                    )}
                  </div>
                </>
              )}

              <div className="sm:col-span-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <input
                      id="disclaimer"
                      type="checkbox"
                      {...register('disclaimer')}
                      className="h-4 w-4 text-indigo-500 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="disclaimer" className="font-medium text-gray-300">
                      IP & Curriculum Disclaimer
                    </label>
                    <p className="text-gray-400">I understand that the curriculum, frameworks, and logic provided by JJL Enterprise are proprietary and protected by Trademark law. I agree that these materials are for my personal professional development and cannot be reproduced or redistributed. I also acknowledge that career results are dependent on my commitment to the Deep-Work sessions and velocity targets set by the Academy.</p>
                  </div>
                </div>
                {errors.disclaimer && <p className="mt-1 text-sm text-red-500">{errors.disclaimer.message}</p>}
              </div>
            </div>

            <div className="flex justify-end pt-5">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {isLoading ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>

          {isSuccess && (
            <div className="mt-6 rounded-md bg-green-900 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-300">Successfully submitted!</p>
                  <p className="mt-1 text-sm text-green-400">Thank you for your submission. We will be in touch shortly.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
