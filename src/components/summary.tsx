import { CheckCircle2, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { InOrbitIcon } from './in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from '../http/get-summary'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'

dayjs.locale(ptBR)

export function Summary() {
    const { data } = useQuery({
        queryKey: ['summary'],
        queryFn: getSummary,
        staleTime: 1000 * 60, // 60 seconds
    })

    if (!data) {
        return null
    }

    const firstDayOfTheWeek = dayjs().startOf('week').format('D MMM')
    const lastDayOfTheWeek = dayjs().endOf('week').format('D MMM')

    const completedPercentege = Math.round((data.completed / data.total) * 100)

    return (
        <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <InOrbitIcon />
                    <span className="text-lg font-semibold capitalize">
                        {firstDayOfTheWeek} - {lastDayOfTheWeek}
                    </span>
                </div>
                <DialogTrigger asChild>
                    <Button size="sm">
                        <Plus className="size-4" />
                        Cadastrar Meta
                    </Button>
                </DialogTrigger>
            </div>
            <div className="flex flex-col gap-3">
                <Progress max={15} value={8}>
                    <ProgressIndicator
                        style={{ width: `${completedPercentege}%` }}
                    />
                </Progress>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span>
                        Você completou{' '}
                        <span className="text-zinc-100">
                            {data?.completed}{' '}
                        </span>
                        de <span className="text-zinc-100">{data?.total}</span>{' '}
                        metas essa semana.
                    </span>
                    <span>{completedPercentege}%</span>
                </div>
            </div>
            <Separator />
            <div className="flex gap-3 flex-wrap">
                <OutlineButton>
                    <Plus className="size-4 text-zinc-600" />
                    Meditar
                </OutlineButton>
                <OutlineButton>
                    <Plus className="size-4 text-zinc-600" />
                    Estudar
                </OutlineButton>
                <OutlineButton>
                    <Plus className="size-4 text-zinc-600" />
                    Malhar
                </OutlineButton>
                <OutlineButton>
                    <Plus className="size-4 text-zinc-600" />
                    Alimentar Bem
                </OutlineButton>
            </div>
            <div className="flex flex-col gap-6">
                <h2 className="text-xl font-medium">Sua Semana</h2>
                <div className="flex flex-col gap-4">
                    <h3 className="font-medium">
                        Domingo{' '}
                        <span className="text-zinc-400">(22 de Setembro)</span>
                    </h3>
                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="size-4 text-pink-500" />{' '}
                            <span className="text-zinc-400 text-sm">
                                Você completou "
                                <span className="text-zinc-100">
                                    acordar cedo
                                </span>
                                " às{' '}
                                <span className="text-zinc-100">08:13</span>.
                            </span>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="size-4 text-pink-500" />{' '}
                            <span className="text-zinc-400 text-sm">
                                Você completou "
                                <span className="text-zinc-100">
                                    acordar cedo
                                </span>
                                " às{' '}
                                <span className="text-zinc-100">08:13</span>.
                            </span>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="size-4 text-pink-500" />{' '}
                            <span className="text-zinc-400 text-sm">
                                Você completou "
                                <span className="text-zinc-100">
                                    acordar cedo
                                </span>
                                " às{' '}
                                <span className="text-zinc-100">08:13</span>.
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-medium">
                        Segunda{' '}
                        <span className="text-zinc-400">(23 de Setembro)</span>
                    </h3>
                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="size-4 text-pink-500" />{' '}
                            <span className="text-zinc-400 text-sm">
                                Você completou "
                                <span className="text-zinc-100">
                                    acordar cedo
                                </span>
                                " às{' '}
                                <span className="text-zinc-100">08:13</span>.
                            </span>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="size-4 text-pink-500" />{' '}
                            <span className="text-zinc-400 text-sm">
                                Você completou "
                                <span className="text-zinc-100">
                                    acordar cedo
                                </span>
                                " às{' '}
                                <span className="text-zinc-100">08:13</span>.
                            </span>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="size-4 text-pink-500" />{' '}
                            <span className="text-zinc-400 text-sm">
                                Você completou "
                                <span className="text-zinc-100">
                                    acordar cedo
                                </span>
                                " às{' '}
                                <span className="text-zinc-100">08:13</span>.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
