"use client"

import * as React from "react"
import { CalendarIcon, Clock } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { supabase } from "@/lib/supabaseClient"

interface DateTimePickerProps {
  carId: string
}

export function ReserveCar({ carId }: DateTimePickerProps) {
  const [startDate, setStartDate] = React.useState<Date | undefined>()
  const [endDate, setEndDate] = React.useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = React.useState<string>()
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState<string | null>(null)

  const times = React.useMemo(() => {
    const hours = []
    for (let i = 8; i <= 20; i++) {
      hours.push(`${i}:00`)
      hours.push(`${i}:30`)
    }
    return hours
  }, [])

  const handleReserve = async () => {
    if (!startDate || !endDate || !selectedTime) {
      setMessage("Please select start date, end date, and time.")
      return
    }

    setLoading(true)
    setMessage(null)

    try {
      const reservationStartDateTime = new Date(startDate)
      const reservationEndDateTime = new Date(endDate)
      const [hours, minutes] = selectedTime.split(":").map(Number)

      reservationStartDateTime.setHours(hours, minutes)
      reservationEndDateTime.setHours(hours, minutes)

      const { data, error } = await supabase
        .from("reservations")
        .insert([{ car_id: carId, start_date: reservationStartDateTime, end_date: reservationEndDateTime }])

      if (error) {
        throw error
      }

      setMessage("Car reserved successfully!")
    } catch (error) {
      setMessage(`Error: ${(error as Error).message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-4 p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-semibold">Reserve a Car</h2>
      
      {/* Fecha de Entrada */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !startDate && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {startDate ? format(startDate, "PPP") : <span>Pick start date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={startDate}
            onSelect={setStartDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {/* Fecha de Salida */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !endDate && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {endDate ? format(endDate, "PPP") : <span>Pick end date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={endDate}
            onSelect={setEndDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {/* Selección de Hora */}
      <Select value={selectedTime} onValueChange={setSelectedTime}>
        <SelectTrigger>
          <SelectValue placeholder="Select time">
            {selectedTime ? (
              <>
                <Clock className="mr-2 h-4 w-4 inline" />
                {selectedTime}
              </>
            ) : (
              <>
                <Clock className="mr-2 h-4 w-4 inline" />
                <span>Pick a time</span>
              </>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {times.map((time) => (
            <SelectItem key={time} value={time}>
              {time}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Botón de Reserva */}
      <Button onClick={handleReserve} disabled={loading}>
        {loading ? "Reserving..." : "Reserve Car"}
      </Button>

      {/* Mensaje de Estado */}
      {message && <p className="text-sm mt-2">{message}</p>}
    </div>
  )
}
